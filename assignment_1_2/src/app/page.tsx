export default function Home() {
  function tableHead(cell1: string, cell2: string) {
    return (
      <thead>
        <tr>
          <th>{cell1} </th>
          <th>{cell2}</th>
        </tr>
      </thead>
    );
  }
  function tableBody(cell1: string, cell2: string) {
    return (
      <tbody>
        <tr>
          <td>{cell1}</td>
          <td>{cell2}</td>
        </tr>
      </tbody>
    );
  }
  function listElement(item: string) {
    return <li>{item}</li>;
  }
  function imageElement(src: string, alt: string) {
    return <img src={src} alt={alt} />;
  }
  return (
    <main>
      <header>
      <h1>hello world</h1>
        <h2> this is my website</h2>
        </header>
      <div id='tableDiv'>
      <table>
        {tableHead('a', 'b')}
        {tableBody('1', '2')}
        </table>
      </div>
      <div id='listDiv'>
        <div id='unorderedList'>
        <ul>  
          {listElement('item1')}
          {listElement('item2')}
          </ul>
        </div>
        <div id='orderedList'>
        <ol>
          {listElement('item1')}
            {listElement('item2')}
          </ol>
        </div>
      </div>
      <div id='imageDiv'>
        {imageElement('data:image/png;base64,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', 'placeholder')}
      </div>
      <div id='anchorDiv'>
        <a href='https://www.google.com'>Google</a>
      </div>
      <div id='textDiv'>
        <b>bold text</b>
        <br></br>
        <i>italic text</i>
        <br></br>
        <p>paragraph text</p>
        <br></br>
        <br></br>
        <p> there are a couple line breaks here</p>
        </div>

      
    </main>
  );
}
