using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NormaalScript : MonoBehaviour
{
    public static float NormaalPunten = 50;
    public static bool NormaalClicked = false;

    public void NormaalButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        NormaalClicked = true;
    }

    public void Update()
    {
        Debug.Log(NormaalPunten);
    }
}