# StreamVibe

StreamVibe is a modern video management application built with Vue.js and TypeScript. It allows users to upload, watch, and manage their video content with a sleek and intuitive interface.

## Features

- 🎥 Video Management
  - Add new videos with detailed information
  - Edit existing video details
  - Delete videos
  - View video cards with thumbnails and descriptions

- 🎨 Modern UI
  - Responsive design that works on all devices
  - Clean and intuitive interface
  - Modal forms for adding and editing videos
  - Beautiful card-based layout

- 🔧 Technical Features
  - Built with Vue 3 and TypeScript
  - Component-based architecture
  - Reactive state management
  - Form validation
  - RESTful API integration

## Project Structure

```
src/
├── App.vue              # Main application component
├── components/
│   ├── VideoCard.vue    # Video card display component
│   ├── VideoForm.vue    # Form for adding new videos
│   └── EditVideoForm.vue # Form for editing existing videos
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/streamvibe.git
cd streamvibe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a New Video

1. Click the "Add New Video" button
2. Fill in the video details:
   - Video Name
   - Slug
   - Video Length
   - Created Date
   - Thumbnail URL
   - Description
3. Click "Add Video" to save

### Editing a Video

1. Click the edit button on any video card
2. Modify the video details as needed
3. Click "Save Changes" to update or "Cancel" to discard changes

### Deleting a Video

1. Click the delete button on any video card
2. Confirm the deletion

## Technologies Used

- Vue.js 3
- TypeScript
- Tailwind CSS
- Axios for API requests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of the project
