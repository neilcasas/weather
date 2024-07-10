const errorComponent = (error) => {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error-msg");
  errorDiv.innerHTML = `<h1>:'(</h1>
    <p>Something went wrong, try refreshing the page. </p>
    <p>${error}</p>`;

  return errorDiv;
};

export { errorComponent };
