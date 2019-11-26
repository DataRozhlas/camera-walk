#%%
import json

# %%
with open('./scratch/kamery.geojson', 'r', encoding='utf-8') as f:
    d = json.loads(f.read())

#%%
def simpl(arr):
    out = []
    for pair in arr:
        out.append([
            round(pair[0], 5), # https://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude
            round(pair[1], 5),
        ])
    return out
# %%
out = []
for geom in d['features']:
    out.append(simpl(geom['geometry']['coordinates'][0][0]))

# %%
with open('./js/cams.js', 'w', encoding='utf-8') as f:
    f.write('export const cams = ' + json.dumps(out, ensure_ascii=False))

# %%
