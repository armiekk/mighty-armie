import posed from 'react-pose';

const MenuIndicator = posed.div({
  mouseIn: {
    width: '100%'
  },
  mouseOut: {
    width: ({ isActived }) => (isActived ? '100%' : 0),
    height: '0.14em',
    backgroundColor: '#000'
  }
});

export default MenuIndicator;
