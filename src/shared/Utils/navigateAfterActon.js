import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export function useNavigateAfterAction(loadingSelector, errorSelector, path) {
  const [isSent, setIsSent] = useState(false);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const history = useHistory();
  useEffect(() => {
    if (isSent) {
      if (!isLoading && !error) {
        history.replace(path)
      }
    }
  }, [isLoading, error, isSent, history, path])
  return [isSent, setIsSent];
}