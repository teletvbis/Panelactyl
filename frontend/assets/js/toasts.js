const types = {
    success: {
        icon: {
            class: "material-icons icon",
            text: "check_circle",
            color: "#69ff63"
        }
    },
    error: {
        icon: {
            class: "material-icons icon",
            text: "cancel",
            color: "#ff6363"
        }
    },
    info: {
        icon: {
            class: "material-icons icon",
            text: "information",
            color: "#63acff"
        }
    },
    waiter: {
        icon: {
            class: "spinner",
            text: "",
            color: ""
        }
    }
}

const timeout = 5000;
let counter = 0;

function moderateContainer() {
    const container = document.querySelector(".toasts");
    if (!container) {
        const container = document.createElement("div");
        container.classList.add("toasts");
        document.body.appendChild(container);
    }
}

function delToast(el, elID) {
    document.getElementById(elID).classList.add("slide-out");
    setTimeout(() => {
        if (el.timeoutId) clearTimeout(el.timeoutId);
        el.remove();
    }, 400);
}

function createToast(id, title, description) {
    const type = types[id];
    if (type) {
        counter++;
        let elID = `toast-${counter}`;
        moderateContainer();
        const el = document.querySelector(".toasts");
        const toastHtml = `<div class="toast slide-in" id="${elID}"><span class="${type.icon.class}" style="color: ${type.icon.color}">${type.icon.text}</span><div class="toast-content"><span class="title">${title}</span><p class="description">${description}</p></div></div>`
        el.innerHTML += toastHtml;
        document.body.appendChild(el);
        let toastEl = document.getElementById(elID);
        el.timeoutId = setTimeout(() => delToast(el, elID, toastEl), timeout);
    }
}