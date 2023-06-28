import React from "react";
import Header from "../src/assets/Header"
import Note from "./assets/Note";
import Footer from "../src/assets/Footer"
import Notes from "./assets/Notes";



function App() {
  return (
    <div>
      <Header />
      {Notes.map((newItem) => <Note
          title={newItem.title}
          content={newItem.content}
        />

      )}
      <Footer />
    </div>
  );
}

export default App;
