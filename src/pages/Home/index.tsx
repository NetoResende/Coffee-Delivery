import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  Card,
  CardCoffeeList,
  CardContainer,
  CardHeader,
  CardInfo,
} from "./styles";
import { coffees } from "../../../data.json";
import { useTheme } from "styled-components";
import { Cards } from "../../components/Cards";

export function Home() {
  const theme = useTheme();

  return (
    <div>
      <Card>
        <CardContainer>
          <div>
            <CardHeader>
              <h1>Encontre o Café perfeito para qualquer hora dia dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </CardHeader>

            <CardInfo>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </CardInfo>
          </div>

          <img src="/images/hero.svg" alt=" Café do Coffee Delivery" />
        </CardContainer>
      </Card>

      <CardCoffeeList>
        <h2>Nossos cafés</h2>
        <div>
          {coffees.map((coffee) => (
            <Cards key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CardCoffeeList>
    </div>
  );
}
