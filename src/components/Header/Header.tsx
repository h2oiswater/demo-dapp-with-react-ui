import {TonConnectButton} from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {
    return <header>
        <span>欢迎Lumia前来测试</span>
        <img style={{width: '100px', height: '100px'}} src='/20250804-185834.jpeg' alt="logo" />
        <TonConnectButton />
    </header>
}
