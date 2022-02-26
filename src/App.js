import React from 'react';
import { Section } from './Styles';
function App() {
  return (
    <>
      <h1>Heading1</h1>
      <h2>Heading2</h2>
      <h3>Heading3</h3>
      <p>Text1</p>
      <section>
        <h2>Heading2</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus iste hic, animi quam expedita recusandae illum
          aspernatur quas laboriosam distinctio perspiciatis aut. Iusto natus
          minus saepe. Pariatur et illum explicabo.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
          officiis cumque porro eveniet, laboriosam ipsam nam quasi doloremque,
          qui, culpa dignissimos ipsum quis iste enim laudantium quas odio
          magnam.
        </p>
      </section>
      <Section padding='3rem 0'>
        <h2>Heading2</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus iste hic, animi quam expedita recusandae illum
          aspernatur quas laboriosam distinctio perspiciatis aut. Iusto natus
          minus saepe. Pariatur et illum explicabo.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
          officiis cumque porro eveniet, laboriosam ipsam nam quasi doloremque,
          qui, culpa dignissimos ipsum quis iste enim laudantium quas odio
          magnam.
        </p>
      </Section>
    </>
  );
}

export default App;
