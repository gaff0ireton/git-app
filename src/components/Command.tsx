import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

type Props = {
  command: string;
};

export default function Command({ command }: Props) {
  const codeRef = useRef<HTMLElement>(null);

  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  const handleCopy = async () => {
    const currentCommand = codeRef.current?.textContent ?? '';

    try {
      await navigator.clipboard.writeText(currentCommand);

      setStatus('copied');
    } catch (err) {
      setStatus('failed');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 2000);
  };

  return (
    <div className="card__code">
      <header className="card__header-code">
        <span className="card__icon">
          <Icon icon="mdi:code-tags" />
        </span>
        <p>Git Bash</p>
        <button
          type="button"
          className="card__copy-btn"
          onClick={handleCopy}
          data-tooltip={status === 'copied' ? 'コピーしました' : 'コードをコピー'}
          aria-label="コピー"
        >
          <Icon
            icon={
              status === 'copied' ? 'mdi:check' : status === 'failed' ? 'mdi:alert-circle-outline' : 'mdi:content-copy'
            }
          />
        </button>
      </header>

      <pre>
        <code ref={codeRef} className="card__command" contentEditable spellCheck="false" suppressContentEditableWarning>
          {command}
        </code>
      </pre>
    </div>
  );
}
