import React, { lazy, Suspense, useState } from "react";
import TimerClass from "./Components/Timer/TimerClass";
import Clock from "./Components/Clock/Clock";
//import Artists from "./Components/Lazy_loading/Artists";
const Artists = lazy(() => import("./Components/Lazy_loading/Artists"));
function App() {
  const [Dynamic, setDynamic] = useState();

  return (
    <div>
      {/* <Clock />
      <TimerClass /> */}

      {async () => {
        await import("./Components/Dynamic_import/Dynamic").then((res) => {
          console.log(res.default);
          setDynamic(res.default);
        });
      }}

      {Dynamic && <Dynamic />}
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Artists />
      </Suspense>
    </div>
  );
}

export default App;
