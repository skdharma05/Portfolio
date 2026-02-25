import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
                    <div className="text-center max-w-md">
                        <div className="text-6xl mb-6">⚠️</div>
                        <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
                        <p className="text-text-secondary mb-6">
                            An unexpected error occurred while rendering this section.
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false, error: null })}
                            className="btn-primary"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
