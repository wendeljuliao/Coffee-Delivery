import { Card } from "../../../../components/Card";
import { mocksCoffee } from "../../../../mocks/Coffees";
import { mappingCoffees } from "../../../../utils/mapping-coffee-images";
import { Container, Content, ContentCards } from "./styles";

export function CoffeesCard() {
  return (
    <Container>
      <Content>
        <h2>Nossos cafés</h2>
        <ContentCards>
          {mocksCoffee.map((coffee) => {
            return (
              <Card
                key={coffee.id}
                name={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                price={coffee.price}
                img={mappingCoffees[coffee.name].image}
              />
            );
          })}
        </ContentCards>
      </Content>
    </Container>
  );
}
