let image = document.querySelector("img");
const fileinput = document.querySelector("#file-input");

function fileUpdate() {

    var file = fileinput.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        byteArray = new Uint8Array(reader.result);
        console.log(byteArray.byteLength);

        // Perform operations on byteArray
        newByteArray = byteArray;
        
        image.src = URL.createObjectURL(
            new Blob(
                [newByteArray.buffer],
                { type: 'image/png' }
            )
        );
    }
    reader.readAsArrayBuffer(file);
}
