import React, { useEffect, useRef } from 'react';

interface Props {
  amount: number;
}

const WompiWidget = ({ amount }: Props) => {
  const refForm = useRef<HTMLFormElement>(null);
  const formatAmount = amount.toFixed(0);
  useEffect(() => {
    const formElement = refForm.current;
    const script = document.createElement('script');
    script.src = 'https://checkout.wompi.co/widget.js';
    script.setAttribute('data-render', 'button');
    script.setAttribute(
      'data-public-key',
      'pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH'
    );
    script.setAttribute('data-currency', 'COP');
    script.setAttribute('data-amount-in-cents', formatAmount.toString());
    script.setAttribute('data-reference', '4XMPGKWWPKWQ');
    script.setAttribute(
      'data-signature:integrity',
      '37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5'
    );

    formElement!.appendChild(script);

    return () => {
      formElement!.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <form ref={refForm} id="form"></form>;
};

export default WompiWidget;
