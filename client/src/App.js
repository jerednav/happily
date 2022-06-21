import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AddMood,
  AllMoods,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="stats" element={<Stats />} />
          <Route path="all-moods" element={<AllMoods />}></Route>
          <Route path="add-mood" element={<AddMood />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
