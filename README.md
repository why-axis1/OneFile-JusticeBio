# OneFile-JusticeBio

To add the products to the main html file simply copy and paste the list into the html script tag or create a new script tag and add the source file:
<script src="PRODUCTS.js" ></script>

Notice that at the very end of the PRODUCTS.js file there is a for loop which is responsible for adding the directory path to each of the products image 
key:

for(let product of products){
      product.image = "YOUR_IMAGE_PATH" + product.image
    }
    
You must add your image folders path to the respective string with a slash at the end, eg.:

/Users/your_user/Documents/VScode/JusticeBioFinal.html/Product-Images/

This string will be concatenated with each product's image name
