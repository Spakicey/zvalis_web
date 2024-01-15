import axios from 'axios';

export async function getProjects() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/projects/');
    return response.data;
  } catch (error) {
    // Handle errors if necessary
    console.error('Error fetching projects:', error);
    throw error; // Re-throw the error to propagate it
  }
}

export function getPath() {
  return 'http://127.0.0.1:8000'
};
