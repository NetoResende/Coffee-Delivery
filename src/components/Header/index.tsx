import { Link } from "react-router-dom";
import { Aside, Container } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../../hooks/useCart";

export function Header(){
  const { cart} = useCart()
  return (
    <Container>
      <Link to='/home'>
       <img src="/logo.svg" alt="coffee Delivery" />
      </Link>
      <Aside>
        <div>
          <MapPin size={22} weight="fill"/>
          <span>Fortaleza, Ce</span>
        </div>
      <Link to={`cart`} aria-disabled={cart.length === 0}>
            <ShoppingCart size={22} weight="fill"/>
            { cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}