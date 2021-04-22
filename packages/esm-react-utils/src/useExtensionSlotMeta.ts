import { useMemo } from "react";
import { useConnectedExtensions } from "./useConnectedExtensions";

/**
 * Extract meta data from all extension for a given extension slot.
 * @param extensionSlotName
 */
export function useExtensionSlotMeta(extensionSlotName: string) {
  const extensions = useConnectedExtensions(extensionSlotName);

  return useMemo(
    () => Object.fromEntries(extensions.map((ext) => [ext.name, ext.meta])),
    [extensions]
  );
}
