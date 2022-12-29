const getHtml = (dashName, firstList, secondList, data1, data2, selectedItemId) => {
    const name = dashName
    let litext = 'default'
    let litext2 = 'default2'
    const litag = data1.map(item => {
        /* if (item.id === selectedItemId) {
          litext = item.value
        } */
        return `<li class="nav-item" data-type="item" data-id="${item.id}">
                ${item.icon}
                <span>${item.value}</span>
                </li>`
    })
    const litag2 = data2.map(item => {
        /* if (item.id === selectedItemId) {
           litext2 = item.value
        } */
        return `<li class="nav-item" data-type="item" data-id="${item.id}">
                ${item.icon}
                <span>${item.value}</span>
                </li>`
    })

    return `
     <div class="toggle" data-type="toggle">
        <i class="fa-solid fa-share" data-type="toggle"></i>
    </div>
    <div class="logo">
        <div class="logoimage"></div>
        <h3>${name}</h3>
    </div>
    <div class="selectedItem"></div>
    <nav>
    <div class="nav-title">
        ${firstList}
    </div>
 
     <ul>
        ${litag.join('')}
     </ul>
     <hr>
     <div class="nav-title">
         ${secondList}
     </div>
     <ul>
        ${litag2.join('')}
     </ul>
     </nav>
     ` 
}

export class Side {
    constructor (selector, options) {
    this.$sidebar = document.querySelector(selector)
    this.options = options
    this.selectedItemId = options.selectedItemId
    this.#render()
    this.#setup()
    
    }
    #render() {
        const {dashName, firstList, secondList, data1, data2} = this.options
        this.$sidebar.classList.add('sidebar')
        this.$sidebar.innerHTML = getHtml(dashName, firstList, secondList, data1, data2, this.selectedItemId)
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$sidebar.addEventListener('click', this.clickHandler)
        this.$value = this.$sidebar.querySelector('span')
    }
    
    clickHandler(event) {
        const {type} = event.target.dataset
        if (type === 'toggle') {
            this.toggle()
        } else if (type === 'item') {
            const id = event.target.dataset.id
            this.select(id) 
        }
    }

    get isOpen() {
        return this.$sidebar.classList.contains('open')
    }
   
    select(id) {
        this.selectedItemId = id
        this.$sidebar.querySelectorAll(`[data-type="item"]`).forEach(el => {
            el.classList.remove('active')
        })
        this.$sidebar.querySelector(`[data-id="${id}"]`).classList.add('active')
    }

    toggle() {
        this.isOpen ? this.small() : this.big()
    }

    big() {
        this.$sidebar.classList.add('open')
    }

    small() {
        this.$sidebar.classList.remove('open')
    }
    destroy() {
        this.$sidebar.removeEventListener('click', this.clickHandler)
        this.$sidebar.outerHTML = ''
    }

}


