import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/auth';
import style from './styles/App.module.scss';

export function App() {
	const { user } = useContext(AuthContext);
	return (
		<main
			className={`${style.contentWrapper} ${
				!!user ? style.contentSigned : ''
			}`}
		>
			<MessageList />
			{!!user ? <SendMessageForm /> : <LoginBox />}
		</main>
	);
}
