const errorComponent = (error) => {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error-msg");
  errorDiv.innerHTML = `<h1>:'(</h1>
    <p>Something went wrong, try entering a valid location or refreshing the page. </p>
    <p>${error}</p>`;

  return errorDiv;
};

export { errorComponent };
