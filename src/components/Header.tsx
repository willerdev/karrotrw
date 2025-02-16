import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carrot, Bell, MessageSquare, User, Wallet, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = (path: string) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const IconButton = ({ icon: Icon, onClick }: { icon: React.ElementType; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="bg-white rounded-full p-2 text-orange-500 hover:bg-orange-100 transition-colors"
    >
      <Icon size={20} />
    </button>
  );

  return (
    <header className="bg-orange-500 text-white py-2 px-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1">
            <Carrot size={24} className="text-orange-500" />
          </div>
          <span className="text-xl font-bold hidden md:inline">Karrots</span>
        </Link>
        <nav className="flex items-center space-x-2 md:space-x-3">
          <IconButton icon={Bell} onClick={() => handleAuthAction('/notifications')} />
          <IconButton icon={MessageSquare} onClick={() => handleAuthAction('/chat')} />
          <IconButton icon={Wallet} onClick={() => handleAuthAction('/wallet')} />
          
          {user ? (
            <Link to="/profile" className="bg-white rounded-full p-1.5 text-orange-500 hover:bg-orange-100 transition-colors">
              <User size={18} />
            </Link>
          ) : (
            <Link to="/login" className="bg-white rounded-full p-1.5 text-orange-500 hover:bg-orange-100 transition-colors">
              <User size={18} />
            </Link>
          )}
          <button
            onClick={() => handleAuthAction('/post-ad')}
            className="bg-white text-orange-500 p-1.5 rounded-full hover:bg-orange-100 transition-colors md:px-3 md:py-1.5 md:rounded-md md:text-sm md:font-semibold"
          >
            <Plus size={18} className="md:hidden" />
            <span className="hidden md:inline">SELL</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
