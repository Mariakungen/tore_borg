import os

def list_files_in_folder(folder_path, output_file):
    try:
        # Check if the folder exists
        if not os.path.exists(folder_path):
            print(f"The folder '{folder_path}' does not exist.")
            return
        
        # Get a list of files in the folder
        files = os.listdir(folder_path)

        # Open the output file for writing
        with open(output_file, "w", encoding="utf-8") as html_file:
            # Write the initial HTML structure
            html_file.write("<!DOCTYPE html>\n<html>\n<head>\n<title>Image Cards</title>\n</head>\n<body>\n")
            
            print(f"Writing HTML for files in '{folder_path}' to '{output_file}'...")
            
            # Generate HTML div elements for each file and write to the file
            for file in files:
                # Skip directories, focus only on files
                if os.path.isfile(os.path.join(folder_path, file)):
                    file_name, file_extension = os.path.splitext(file)
                    # Generate the div element
                    div_element = f'''
                <div class="card-image">
                    <img src="/others_images/{file_name}{file_extension}" alt="{file}">
                </div>
                '''
                    html_file.write(div_element + "\n")
            
            # Close the HTML structure
            html_file.write("</body>\n</html>")
            
        print(f"HTML file successfully written to '{output_file}'")
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the folder path and output HTML file
folder_path = "/home/maria/Downloads/andra_samlare"
output_file = "output.html"

list_files_in_folder(folder_path, output_file)
