'use client';

import { useState, useCallback } from 'react';

/**
 * A hook for managing disclosure state (open/closed)
 */
export function useDisclosure(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return {
        isOpen,
        onOpen,
        onClose,
        onToggle,
    };
}