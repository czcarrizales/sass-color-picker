const colors = ['summer', 'rain', 'sunset', 'luxury', 'technology', 'omega', 'moth', 'sketch', 'bounce', 'chromeo']
let selectedColor = ''

const getRandomColor = () => {
    let filteredColors = colors.filter(color => color !== selectedColor)
    const randomColor = filteredColors[Math.floor(Math.random() * filteredColors.length)]
    selectedColor = randomColor
    document.querySelector('body').className = `bg-secondary-${randomColor}`
    document.getElementById('main-container').className = `bg-primary-${randomColor} border-color-secondary-copy-${randomColor}`
    document.querySelector('h1').className = `text-primary-copy-${randomColor}`
    document.querySelector('h2').className = `text-primary-copy-${randomColor}`
    document.querySelector('button').className = `bg-accent-${randomColor} text-accent-copy-${randomColor}`
    document.getElementById('current-mood').innerText = `${randomColor}`
    document.getElementById('current-mood').className = `text-primary-copy-${randomColor}`
    document.getElementById('outer').className = `bg-secondary-${randomColor} `
    document.getElementById('middle').className = `bg-primary-${randomColor} `
    document.getElementById('inner').className = `bg-accent-${randomColor} `
    document.getElementById('box1').className = `bg-primary-${randomColor} text-primary-copy-${randomColor} border-color-primary-copy-${randomColor}`
    document.getElementById('box2').className = `bg-secondary-${randomColor} text-secondary-copy-${randomColor} border-color-primary-copy-${randomColor}`
    document.getElementById('box3').className = `bg-accent-${randomColor} text-accent-copy-${randomColor} border-color-primary-copy-${randomColor}`

    //Shop Card
    document.getElementById('card').className = `bg-primary-${randomColor} text-primary-copy-${randomColor} border-color-secondary-copy-${randomColor}`
    document.getElementById('shop-card-button').className = `bg-accent-${randomColor} text-accent-copy-${randomColor} border-color-accent-copy-${randomColor}`

    //Profile Card
    document.getElementById('profile-card').className = `bg-primary-${randomColor} border-color-secondary-copy-${randomColor}`
    document.getElementById('profile-card-name').className = `text-primary-copy-${randomColor}`
    document.getElementById('profile-card-email').className = `text-primary-copy-${randomColor}`
    document.getElementById('profile-card-followers').className = `text-primary-copy-${randomColor}`
    document.getElementById('profile-card-following').className = `text-primary-copy-${randomColor}`
    document.getElementById('profile-card-button').className = `bg-accent-${randomColor} text-accent-copy-${randomColor} border-color-accent-copy-${randomColor}`

    //Friends List
    document.getElementById('friends-list').className = `bg-secondary-${randomColor} text-secondary-copy-${randomColor} border-color-secondary-copy-${randomColor}`
    const allFriendsListRows = document.querySelectorAll('.friends-list-row')
    for (let i = 0; i < allFriendsListRows.length; i++) {
        allFriendsListRows[i].className = `friends-list-row bg-primary-${randomColor} text-primary-copy-${randomColor} border-color-primary-copy-${randomColor}`
    }
    const allFriendsListRowButtons = document.querySelectorAll('.friends-list-row-button')
    for (let i = 0; i < allFriendsListRowButtons.length; i++) {
        allFriendsListRowButtons[i].className = `friends-list-row-button bg-accent-${randomColor} text-accent-copy-${randomColor} border-color-accent-copy-${randomColor}`
    }
}