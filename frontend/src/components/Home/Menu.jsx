import MenuCard from "./MenuCard"


const Menu = () => {
  const addToCart = (itemNum) => {
    
  }
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={"https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"}
        price={200}
          title='Cheese Burger'
          handler={addToCart}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={"https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"}
        price={200}
          title='Veg Cheese Burger'
          handler={addToCart}
          delay={0.5}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={"https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"}
        price={200}
          title='Cheese Burger with French Fries'
          handler={addToCart}
          delay={0.8}
        />
      </div>
    </section>
  )
}

export default Menu