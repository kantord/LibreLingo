#!/usr/bin/env bash

set -euo pipefail

url=$(echo "$1" | cut -d',' -f2)
image_name=$(echo "$1" | cut -d',' -f1)
image_id=$(echo "$url" | cut -d'/' -f5)
download_url=$(curl "https://unsplash.com/photos/$image_id" | tidy  2> /dev/null | grep non-sponsored-photo-download-button -C 5 | grep https | sed 's/^[^"]*"//' | sed 's/".*//') || true

if [ -e "./static/images/$image_name.jpg" ]; then
	exit 0
fi

echo "Fetching URL $url"
echo "Image ID $image_id"
wget "$download_url" -O "/tmp/$image_id.jpg"
convert "/tmp/$image_id.jpg" -resize 512x -resize 'x512<' -gravity center  -crop 512x512+0+0 +repage "/tmp/$image_id\_cropped.jpg"
convert "/tmp/$image_id.jpg" -resize 240x -resize 'x240<' -gravity center  -crop 240x240+0+0 +repage "/tmp/$image_id\_tiny.jpg"
convert "/tmp/$image_id.jpg" -resize 100x -resize 'x100<' -gravity center  -crop 100x100+0+0 +repage "/tmp/$image_id\_tinier.jpg"
jpegoptim "/tmp/$image_id\_cropped.jpg" -d "./static/images/" -s -m85
jpegoptim "/tmp/$image_id\_tiny.jpg" -d "./static/images/" -s -m75
jpegoptim "/tmp/$image_id\_tinier.jpg" -d "./static/images/" -s -m55
mv  "./static/images/$image_id\_cropped.jpg" "./static/images/$image_name.jpg"
mv  "./static/images/$image_id\_tiny.jpg" "./static/images/$image_name""_tiny.jpg"
mv  "./static/images/$image_id\_tinier.jpg" "./static/images/$image_name""_tinier.jpg"
