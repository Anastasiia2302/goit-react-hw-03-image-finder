import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
      <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
        {' '}
        <ThreeDots
          height="100"
          width="100"
          radius="10"
          color="#395e60"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      </div>
    );
  };
