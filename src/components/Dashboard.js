import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../api'; 
import './Dashboard.css'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    pastExperience: '',
    skillSets: '',
    education: '',
    phone: '' 
  });
  const [isEditing, setIsEditing] = useState(false); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getUserProfile(token);
        setProfile({
          name: data.name || '',
          email: data.email || '',
          pastExperience: data.pastExperience || '',
          skillSets: data.skillSets || '',
          education: data.education || '',
          phone: data.phone || '' 
        });
        setLoading(false);
      } catch (err) {
        setError('Error fetching profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      await updateUserProfile(token, profile); 
      toast.success('Profile updated successfully', { position: 'top-right' });
    
      setIsEditing(false);
    } catch (err) {
      console.error('Error during profile update:', err); 
      setError('Error updating profile');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value }); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}
      <div className="profile-info">
        <div className="profile-card">
          <p>
            <strong>Name:</strong>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            ) : (
              profile.name
            )}
          </p>
          <p>
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              profile.email
            )}
          </p>
        </div>

        <div className="profile-card">
          <p>
            <strong>Past Experience:</strong>
            {isEditing ? (
              <textarea
                name="pastExperience"
                value={profile.pastExperience}
                onChange={handleChange}
              />
            ) : (
              profile.pastExperience
            )}
          </p>
          <p>
            <strong>Skill Sets:</strong>
            {isEditing ? (
              <input
                type="text"
                name="skillSets"
                value={profile.skillSets}
                onChange={handleChange}
              />
            ) : (
              profile.skillSets
            )}
          </p>
        </div>

        <div className="profile-card">
          <p>
            <strong>Education:</strong>
            {isEditing ? (
              <input
                type="text"
                name="education"
                value={profile.education}
                onChange={handleChange}
              />
            ) : (
              profile.education
            )}
          </p>
          <p>
            <strong>Phone:</strong>
            {profile.phone}
          </p>
        </div>
      </div>

      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default Dashboard;
