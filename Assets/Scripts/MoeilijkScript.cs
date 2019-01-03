using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MoeilijkScript : MonoBehaviour
{
    public static float MoeilijkPunten = 10;
    public static bool MoeilijkClicked = false;

    public void MoeilijkButtonClicked()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        MoeilijkClicked = true;
    }

    public void Update()
    {
        Debug.Log(MoeilijkPunten);
    }
}