import { useContext } from "react";
import { Card } from "../../../../components/Card";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { mappingCoffees } from "../../../../utils/mapping-coffee-images";
import { Container, Content, ContentCards } from "./styles";

export function CoffeesCard() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <Container>
      <Content>
        <h2>Nossos cafés</h2>
        <ContentCards>
          {coffees.map((coffee: any) => {
            return (
              <Card
                key={coffee.id}
                id={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                quantity={coffee.quantity}
                img={mappingCoffees[coffee.name].image}
              />
            );
          })}
        </ContentCards>
      </Content>
    </Container>
  );
}
