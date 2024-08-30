import { useEffect, useState } from "react";
import { QuantityInput } from "../Form/QuantityInput";
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from "./styles";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Cards({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const theme = useTheme();
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }
  function handlerAddItem(){
    addItem({ id: coffee.id, quantity})
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number;
    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handlerAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            ) : (
              <ShoppingCart
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}
