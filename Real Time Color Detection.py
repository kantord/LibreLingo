
import numpy as np
import pandas as pd
import cv2
import imutils


camera = cv2.VideoCapture(0)

r = g = b = xpos = ypos = 0

index = ['color', 'color_name', 'hex', 'R', 'G', 'B']
df = pd.read_csv('colors.csv', names = index, header = None)


def getColorName(R,G,B):
	minimum = 10000
	for i in range(len(df)):
		d = abs(R - int(df.loc[i,"R"])) + abs(G - int(df.loc[i,"G"])) + abs(B - int(df.loc[i,"B"]))
		if (d <= minimum):
			minimum = d
			cname = df.loc[i, 'color_name'] + '   Hex=' + df.loc[i, 'hex']
	return cname


def identify_color(event, x, y, flags, param):
	global b, g, r, xpos, ypos, clicked
	xpos = x
	ypos = y
	b, g, r = frame[y,x]
	b = int(b)
	g = int(g)
	r = int(r)


cv2.namedWindow('image')
cv2.setMouseCallback('image', identify_color)

while True:
    (grabbed, frame) = camera.read()
    frame = imutils.resize(frame, width=900)
    kernal = np.ones((5, 5), "uint8")
    cv2.rectangle(frame, (20,20), (800, 60),(b,g,r), -1)    
    text = getColorName(b,g,r) + '   R=' + str(r) + ' G=' + str(g) + ' B=' + str(b)
    cv2.putText(frame,text, (50,50),2, 0.8, (255,255,255),2,cv2.LINE_AA)
    
    if(r+g+b >= 600):
        cv2.putText(frame,text,(50,50), 2, 0.8, (0,0,0),2,cv2.LINE_AA)   
        
    cv2.imshow('image',frame)
    
    if cv2.waitKey(20) & 0xFF == 27:
        break
    
camera.release()
cv2.destroyAllWindows()










