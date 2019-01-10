using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BackButton : MonoBehaviour
{
    [SerializeField]
    private Transform stopButtonTransform;
    private void Start()
    {
        stopButtonTransform.position = stopButtonTransform.InverseTransformPoint(stopButtonTransform.position + new Vector3(50, 50, 50));

    }
    public void BackButtonClicked()
    {
        SceneManager.LoadScene(0);
    }
}
