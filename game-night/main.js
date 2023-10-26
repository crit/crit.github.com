class App {
    constructor() {

    }

    nav(id) {
        const el = document.getElementById(id)
        if (!el) {
            console.error("unknown nav id: ", id)
            return
        }

        el.addEventListener("click", (e) => {
            if (!e.defaultPrevented) e.preventDefault()

            if (el.className.includes("active")) return

            // remove current "active" nav
            document.querySelector(".nav-link.active").className = "nav-link"

            // make active
            el.className = "nav-link active"

            // hide all views
            document.querySelectorAll(".view").
                forEach(view => view.className = "row view visually-hidden")

            // show data-target
            document.getElementById(el.getAttribute("data-target")).className = 'row view'

            el.blur()
        })
    }
}

class Store {
    constructor() {
        this.db = new Firebase("https://crit.firebaseio.com/game-night")
        this.db.on('value', this.build)
        this.data = []
    }

    build(snapshot) {
        const res = snapshot.val()

        if (!res) {
            console.warn("no data from Firebase")
            return
        }

        res.forEach((id, data) => this.data.push(data))
    }
}

class Entity {
    toString() {
        return JSON.stringify(this)
    }
}

class Drink extends Entity {
    /**
     * @param name string
     * @param score number
     */
    constructor(name, score) {
        super()
        this.name = name
        this.score = score
    }
}

class Food extends Entity {
    constructor(name, score) {
        super()
        this.name = name
        this.score = score
    }
}
