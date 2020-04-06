import pandas as pd

test_data = pd.read_json("./dumps/courseData.json");
test_data = {k: val.groupby('pk')['fields'].apply(list).apply(lambda x: x[0]).to_dict() for k, val in test_data.groupby("model")};
