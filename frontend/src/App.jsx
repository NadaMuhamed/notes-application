import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import CreatePage from './pages/CreatePage';
const app = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/:id" element={<NoteDetailPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes> 
  );
}
export default app;