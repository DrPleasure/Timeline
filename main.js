function showActiveEvent(eventId) {
    const eventElement = document.querySelector(`[data-event-id="${eventId}"]`);
    const eventContent = eventElement.querySelector(".event-content").cloneNode(true);
    const activeEventContent = document.querySelector(".active-event-content");
  
    activeEventContent.innerHTML = '';
  
    // Add image first, followed by the text
    const imgSrc = eventElement.dataset.imgSrc;
  
    if (imgSrc) {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = eventContent.querySelector("h2").textContent;
      imgElement.className = "active-event-image";
      activeEventContent.appendChild(imgElement);
    }
  
    const textElement = document.createElement("div");
  
    textElement.innerHTML = `<h2>${eventContent.querySelector("h2").textContent}</h2>
      <p>${eventContent.querySelector("p").textContent}</p>`;
  
    activeEventContent.appendChild(textElement);
  }
  