

<form action="{{ route("pics") }}" method="post" enctype="multipart/form-data">
    
    @csrf
    Select image to upload:
    <input type="file" name="image" id="image">
    <input type="submit" value="submit" name="submit">
</form>


<img src='/images/product/WhatsApp Image 2024-09-19 at 15.04.37.jpeg' />