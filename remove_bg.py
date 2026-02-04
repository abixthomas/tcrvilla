from PIL import Image
import os

def remove_white_background(input_path, output_path, tolerance=20):
    print(f"Processing: {input_path}")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # Check if pixel is white-ish
            # R > 255-tolerance, G > 255-tolerance, B > 255-tolerance
            if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
                newData.append((255, 255, 255, 0)) # Make Transparent
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Crop to content to remove excess empty space
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Success: Saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

# Paths
source_image = r"C:/Users/USER/.gemini/antigravity/brain/41009036-376b-4fe3-a793-6785eee3d950/uploaded_media_1770187933479.png"
output_image = r"c:/Users/USER/thrissur-villas/public/logo-final-v6-script.png"

remove_white_background(source_image, output_image)
