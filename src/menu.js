
export default Menu = {
}

Menu.name = {
  Launch: {
    title: 'Launch',
    name: 'Launch',
  },
  Tutorial: {
    title: 'Tutorial',
    name: 'Tutorial',
  }
}

Menu.stack = {
  Launch: {
    statusBar: {
      visible: true,
      style: 'light'
    },
    nav: {
      topBar: {
        visible: false,
        drawBehind: true,
        animate: false,
      }
    }
  },
  Tutorial: {
    statusBar: {
      visible: true,
      style: 'light'
    },
    nav: {
      topBar: {
        visible: false,
        drawBehind: true,
        animate: false,
      }
    }
  },
}
