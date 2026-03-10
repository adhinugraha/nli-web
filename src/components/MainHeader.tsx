"use client"
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header`}>
        <Container>
        </Container>
      </header>
    </>
  );
}