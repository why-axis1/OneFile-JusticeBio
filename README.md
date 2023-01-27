# OneFile-JusticeBio

The justiceFullJs.html file has already been updated with the PRODUCTS.js file via a script tag for organizational purposes, to make it all be in one file you can delete the script tag containing the PRODUCTS.js source: <script src="PRODUCTS.js"></script> , and instead copy and paste the full file into the script tag;

Notice that at the very end of the PRODUCTS.js file there is a for loop which is responsible for adding the directory path to each of the products image 
key:

for(let product of products){
      product.image = "YOUR_IMAGE_PATH" + product.image
    }
    
You must add your image folders path to the respective string with a slash at the end, eg.:

/Users/your_user/Documents/VScode/JusticeBioFinal.html/Product-Images/

This string will be concatenated with each product's image name
