const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
   const suffix = this.dataset.sizing || "";
   /* this.name comes from the name attribute in HTML 
   The first argument is the item to be changed and the second is the new value */
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));