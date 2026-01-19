#!/usr/bin/env python3
import csv
import json

def csv_to_js(csv_file, js_file):
    locations = []

    with open(csv_file, 'r', encoding='latin-1') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Parse coordinates from "lat, lng" format
            coords = row['coordinates'].strip().split(',')
            lat = float(coords[0].strip())
            lng = float(coords[1].strip())

            location = {
                'name': row['name'],
                'lat': lat,
                'lng': lng,
                'description': row['description'],
                'category': row['category']
            }

            # Only add subCategory if it exists and is not empty
            if row.get('subCategory') and row['subCategory'].strip():
                location['subCategory'] = row['subCategory']

            # Only add link if it exists and is not empty
            if row.get('link') and row['link'].strip():
                location['link'] = row['link']

            locations.append(location)

    # Write to JS file
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write('const locations = ')
        f.write(json.dumps(locations, indent=4, ensure_ascii=False))
        f.write(';\n')

    print(f"Successfully converted {len(locations)} locations to {js_file}")

if __name__ == '__main__':
    csv_to_js('places.csv', 'places.js')
